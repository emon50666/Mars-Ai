import { useNavigate } from "react-router-dom";
import { getRandompromt } from "../utils";
import { Loader, FormField } from "../components";
import { useState } from "react";
import cdn from "../assets/image/cdn.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiAiGenerate2 } from "react-icons/ri";
import PostBanner from "../components/PostBanner";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, steForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneretingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  // Submit form data
  const handelSubmit = () => {
    console.log("Form Submitted");
  };

  const handelChange = (e) => {
    steForm({ ...form, [e.target.name]: e.target.value });
  };

  const handelSurpriseMe = () => {
    const randomPromt = getRandompromt(form.prompt);
    steForm({ ...form, prompt: randomPromt });
  };

  const generateImage =  async () => {
    if (form.prompt) {
      try {
        setGeneretingImg(true);
          setLoading(true); // Set loading state to true while generating
          const response = await fetch('http://localhost:8000/api/v1/dalle', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ prompt: form.prompt }), // Send prompt to backend
          });

          if (response.ok) {
              // If the response is successful, parse JSON and update the state
              const data = await response.json();
              steForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
          } else {
              // If there's an error, parse the JSON error message and show it to the user
              const errorData = await response.json();
              alert(errorData.error || "An unexpected error occurred.");
          }
      } catch (error) {
          console.log(error);
          alert("Error generating image");
      } finally {
        setGeneretingImg(false);
          setLoading(false); // Set loading state back to false
      }
  } else {
      alert('Please enter a prompt');
  }
  };

  return (
   <>
    <PostBanner/>

    <div className="pt-10  px-2 lg:px-0 container mx-auto min-h-[calc(100vh-73px)]">

      {/* Main Form Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section: Form */}
        <form
          className="flex flex-col gap-6 w-full md:w-1/2"
          onSubmit={handelSubmit}
        >
          {/* Name Input */}
          <FormField
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            handelChange={handelChange}
          />

          {/* Prompt Input */}
          <FormField
            type="text"
            name="promt"
            placeholder="Enter your Imagination Prompt"
            value={form.prompt}
            handelChange={handelChange}
            isSurpriseMe
            handelSurpriseMe={handelSurpriseMe}
          />
           {/* Buttons */}
           <p className="text-xs lg:text-sm relative bottom-4 text-gray-500">
           Once you have created the image you want, you can share it with others in the community.</p>
           <div className="flex gap-4 relative bottom-7">
            <button
              type="button"
              onClick={generateImage}
              className=" flex items-center gap-2 bg-gradient-to-r from-[#2216cd] via-[#7768ff] to-[#cb78ff] text-white py-2 px-6 rounded-md animate-gradient-signal bg-[length:200%_200%]"
            >
             <RiAiGenerate2/>  {generatingImg ? "Generating..." : "Generate"}
            </button>
            <button
              type="button"
              className="flex items-center gap-2 bg-gradient-to-r from-[#4169f9] via-[#6a00ff] to-[#cb78ff] text-white py-2 px-6 rounded-md animate-gradient-signal bg-[length:200%_200%]"
            >
              <IoShareSocialOutline></IoShareSocialOutline> {loading ? "Sharing..." : "Share"}
            </button>
          </div>
        </form>
        

        {/* Right Section: Image Preview and Button */}
        <div className="flex flex-col items-center gap-6 w-full md:w-1/2">
          {/* Image Preview */}
          <div className="relative border border-dotted border-gray-300 rounded-md w-full max-w-md h-64 flex items-center justify-center">
            {form?.photo ? (
              <img
                src={form?.photo}
                alt={form?.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={cdn}
                alt="Preview"
                className="w-full h-full object-contain opacity-30"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-10 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-md">
                <Loader />
              </div>
            )}
          </div>

         
        </div>
      </div>
    </div>
   </>
  );
};

export default CreatePost;
