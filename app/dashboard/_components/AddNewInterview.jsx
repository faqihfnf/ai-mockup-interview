"use client";
import React, { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);
  };

  return (
    <div>
      <div className="p-10 border rounded-lg text-center bg-secondary hover:scale-105 transition-all hover:cursor-pointer hover:shadow-lg" onClick={() => setOpenDialog(true)}>
        <h2 className="text-2xl font-bold ">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="p-4">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">Tell us more about your job interview</DialogTitle>
              <DialogClose onClick={() => setOpenDialog(false)}>X</DialogClose>
            </div>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>Add details about your job position, job descriptions, skills and experience</h2>
                  <div className="mt-5 my-3">
                    <label>Job Position</label>
                    <Input className="text-black focus:outline-none focus:ring-0 focus:border-primary" placeholder="Ex. Software Engineer" required onChange={(e) => setJobPosition(e.target.value)} />
                  </div>
                  <div className="mt-5 my-3">
                    <label>Job Description</label>
                    <Textarea placeholder="Ex. React, Node, Typescript" required onChange={(e) => setJobDesc(e.target.value)} />
                  </div>
                  <div className="mt-5 my-3">
                    <label>Years of Experience</label>
                    <Input placeholder="5" type="number" required onChange={(e) => setJobExperience(e.target.value)} />
                  </div>
                </div>
                <div className="flex justify-end gap-5">
                  <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Start Interview</Button>
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
