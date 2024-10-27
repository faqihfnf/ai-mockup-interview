"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { UserAnswer, MockInterview, OverallFeedback } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";

function InterviewItemCard({ interview, onDelete }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    try {
      const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, interview?.mockId)).orderBy(UserAnswer.id);

      setFeedbackList(result);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;

    setIsDeleting(true);
    try {
      // Hapus user answers terkait
      await db.delete(UserAnswer).where(eq(UserAnswer.mockIdRef, interview?.mockId));

      // Hapus overall feedback terkait
      await db.delete(OverallFeedback).where(eq(OverallFeedback.mockIdRef, interview?.mockId));

      // Hapus mock interview
      await db.delete(MockInterview).where(eq(MockInterview.mockId, interview?.mockId));

      // Tampilkan toast success
      toast.success("Interview deleted successfully", {
        description: `${interview.jobPosition} interview has been deleted.`,
        action: {
          label: "Close",
        },
      });

      // Panggil onDelete callback dari parent component
      if (onDelete) {
        onDelete(interview.mockId);
      }

      // Tambahan: jika masih diperlukan, bisa menambahkan refresh
      // router.refresh();
    } catch (error) {
      console.error("Error deleting interview:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="border rounded-lg p-3 shadow-md hover:shadow-indigo-500">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
        <AlertDialog>
          <AlertDialogTrigger disabled={isDeleting}>
            <Trash2 className={`cursor-pointer w-4 h-4 hover:text-red-500 ${isDeleting ? "opacity-50" : ""}`} />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Apakah anda yakin ingin menghapus interview ini?</AlertDialogTitle>
              <AlertDialogDescription>Data yang dihapus tidak dapat dikembalikan kembali. Maka pastikan anda benar-benar yakin sebelum menghapusnya.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className={`bg-red-500 hover:bg-red-600 ${isDeleting ? "opacity-50 cursor-not-allowed" : ""}`} disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h2 className="text-sm text-gray-600 mb-1">{interview?.jobExperience} Years of Experience</h2>
      <h2 className="text-xs text-gray-400">Created Date : {interview.createdAt}</h2>
      <div className="flex justify-between mt-5 gap-5">
        {feedbackList?.length > 0 ? (
          <Button size="sm" variant="outline" className="w-full" onClick={onFeedbackPress}>
            Feedback Interview
          </Button>
        ) : (
          <Button size="sm" className="w-full" onClick={onStart}>
            Start Interview
          </Button>
        )}
      </div>
    </div>
  );
}

export default InterviewItemCard;
