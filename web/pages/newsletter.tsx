import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PlateEditor } from "@/components/plate/PlateEditor";
import { PlateRead } from "@/components/plate/PlateRead";
import { API_URL } from "@/lib/constants";
import { NewsletterPost } from "@/types/post";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Newsletter({ posts }: { posts: NewsletterPost[] }) {
  const [enteringPassword, setEnteringPassword] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const submit = async () => {
    setCorrectPassword(false);
    setEnteringPassword(false);

    await axios.post(
      `${API_URL}/v1/newsletter`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PASSWORD,
        },
      }
    );

    router.replace(router.asPath);
  };

  return (
    <>
      <Header
        title="📰 Newsletter"
        subtitle="Our newsletter, featuring updates on our team and sponsors"
      />

      <div className="max-w-[800px] mx-auto">
        <div className="mb-5">
          {!enteringPassword && !correctPassword ? (
            <button
              onClick={() => setEnteringPassword(true)}
              className="bg-gray-700/50 px-4 py-2 rounded-lg text-gray-400 hover:text-gray-300 transition-all duration-300"
            >
              + New Post
            </button>
          ) : (
            <input
              type="text"
              placeholder="Password"
              className="rounded-lg bg-gray-700/50 border border-gray-700 px-4 py-2 outline-none"
              onChange={(e) => {
                if (e.target.value === process.env.NEXT_PUBLIC_PASSWORD) {
                  setCorrectPassword(true);
                }
              }}
            />
          )}

          {correctPassword && (
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder="Title"
                className="rounded-lg bg-gray-700/50 border border-gray-700 px-4 py-2 outline-none"
                onChange={(e) => setTitle(e.target.value)}
              />
              <PlateEditor
                editableProps={{
                  className:
                    "rounded-lg bg-gray-700/50 border border-gray-700 px-4 py-2 outline-none",
                }}
                onChange={(v) => setContent(JSON.stringify(v))}
              />
              <button
                onClick={submit}
                className="bg-gray-700/50 px-4 py-2 rounded-lg text-gray-400 hover:text-gray-300 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 justify-center items-center">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full rounded-lg bg-gray-700/50 border border-gray-700 p-8"
            >
              <h1 className="font-bold text-2xl mb-3">{post.title}</h1>

              <PlateRead rawText={post.content} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await axios.get(`${API_URL}/v1/newsletter`);

  return {
    props: {
      posts: posts.data.data,
    },
  };
};
