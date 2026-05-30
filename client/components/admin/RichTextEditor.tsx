"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import "react-quill-new/dist/quill.snow.css";
import { supabase } from "@/utils/supabase";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill-new");
    // Forward the ref properly for dynamic imports
    return function ReactQuillWrapper({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] w-full bg-gray-50 animate-pulse rounded-lg border border-gray-200"></div>
    ),
  }
);

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const quillRef = useRef<any>(null);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          const fileExt = file.name.split(".").pop();
          const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
          const filePath = `${fileName}`;
          
          const { error: uploadError } = await supabase.storage
            .from("blog-images")
            .upload(filePath, file);

          if (uploadError) {
            console.error("Upload Error:", uploadError);
            throw uploadError;
          }

          const { data } = supabase.storage
            .from("blog-images")
            .getPublicUrl(filePath);

          // Get the editor instance
          const editor = quillRef.current?.getEditor();
          if (editor) {
            const range = editor.getSelection();
            editor.insertEmbed(range?.index || 0, "image", data.publicUrl);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          alert("Failed to upload image. Make sure the 'blog-images' bucket exists and allows uploads.");
        }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <div className="bg-white rounded-lg">
      <ReactQuill
        forwardedRef={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="h-[400px] mb-12"
      />
    </div>
  );
}
