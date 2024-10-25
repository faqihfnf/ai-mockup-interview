"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAiModal";
import { LoaderCircle, X } from "lucide-react";
import { db } from "@/utils/db";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { MockInterview } from "@/utils/schema";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [totalQuestions, setTotalQuestions] = useState();
  const [language, setLanguage] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonMockResp, setJsonMockResp] = useState([]);
  const router = useRouter();
  const { user } = useUser();
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const inputPromt =
      "Job Position : " +
      jobPosition +
      ", Job Description: " +
      jobDesc +
      ", Years of Experience: " +
      jobExperience +
      ", total question: " +
      totalQuestions +
      ",  interview language: " +
      language +
      ". depends on this information, please give me interview question with answered according to selected total question and interview language in JSON format.Ensure the difficulty of the questions is appropriate based on the job position, job description, and years of experience. give question and answered as field in JSON";

    const result = await chatSession.sendMessage(inputPromt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    setJsonMockResp(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          language: language,
          createdby: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("YYYY-MM-DD"),
        })
        .returning({ mockId: MockInterview.mockId });

      if (resp) {
        setOpenDialog(false);
        window.location.reload();
      }
    } else {
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg text-center bg-secondary hover:scale-105 transition-all hover:cursor-pointer hover:shadow-lg"
        onClick={() => setOpenDialog(true)}>
        <h2 className="text-2xl font-bold ">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="p-4">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">
                Tell us more about your job interview
              </DialogTitle>
              <DialogClose onClick={() => setOpenDialog(false)}>
                <X />
              </DialogClose>
            </div>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add details about your job position, job descriptions,
                    skills and experience
                  </h2>
                  <div className="mt-5 my-3">
                    <label>Job Position</label>
                    <Input
                      className="text-black focus:outline-none focus:ring-0"
                      placeholder="Ex. Software Engineer"
                      required
                      onChange={(e) => setJobPosition(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 my-3">
                    <label>Job Description</label>
                    <Textarea
                      className="text-black focus:outline-none focus:ring-0"
                      placeholder="Ex. React, Node, Typescript"
                      required
                      onChange={(e) => setJobDesc(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 my-3">
                    <label>Years of Experience</label>
                    <Input
                      className="text-black focus:outline-none focus:ring-0"
                      placeholder="5"
                      type="number"
                      required
                      onChange={(e) => setJobExperience(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 my-3">
                    <label>Total Questions</label>
                    <Input
                      className="text-black focus:outline-none focus:ring-0"
                      placeholder="5"
                      type="number"
                      max="5"
                      required
                      onChange={(e) => setTotalQuestions(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 my-3">
                    <label>Interview Language</label>
                    <Select
                      onValueChange={(value) => setLanguage(value)}
                      required>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent className="text-black focus:outline-none focus:ring-0">
                        <SelectGroup>
                          {/* <SelectLabel>Language</SelectLabel> */}
                          <SelectItem value="indonesia">Indonesia</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end gap-5">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        {" "}
                        <LoaderCircle className="w-4 h-4 animate-spin" /> "Ai
                        Generating"
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
