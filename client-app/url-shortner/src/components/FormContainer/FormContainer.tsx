import * as React from "react";

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  const [fullUrl, setfullUrl] = React.useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  }

  return (
    <div className="container mx-auto max-w-screen-2xl p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full p-20 rounded-lg backdrop-brightness-50">
          <h2 className="text-white text-4xl text-center pb-4">
            {" "}
            URL shortner
          </h2>
          <p className="text-white text-center pb-2 text-xl font-extralight ">
            paste your Long Url here
          </p>
          <p className="text-white text-center pb-4 text-sm font-extralight">
            {" "}
            This is a website which can be used to short a long URL
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  {" "}
                  urlshortner.link
                </div>
                <input
                  type="text"
                  placeholder="Paste your link here"
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:blue-500 "
                  value = {fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setfullUrl(e.target.value)} 
                ></input>
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-lg bg-green-600 border border-green-700 focus:ring-4 focus:outline-none focus:ring-blue"
                >
                  Short it
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
