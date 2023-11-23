import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Copy, CopyCheck } from 'lucide-react';
import { Camera } from 'lucide-react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const [isTextCopied, setIsTextCopied] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
        setIsTextCopied(false);
      });
  };

  const handleCopyToClipboard = () => {
  
    navigator.clipboard.writeText(text);
  
    setIsTextCopied(true);
  };

  return (
    <div className=" mx-auto h-screen flex justify-center items-center">
      <div className="p-8 rounded shadow-md mt-6 w-full relative">
        {!isLoading && (
          <>
            <h1 className="text-center text-black text-3xl mb-5 flex items-center justify-center">
              <span className=" text-black font-bold">Image To  Text</span>
              <Camera className=" caret-lime-200 ml-4" />
            </h1>
          </>


        )}
        {isLoading && (
          <p className="text-center mt-2">Converting: {progress} %</p>
        )}
        {!isLoading && !text && (
          <>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input className='mt-10' onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} type="file" />
            </div>
            <Button onClick={handleSubmit} className="mt-10 col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Convert</Button>
          </>
        )}
        {!isLoading && text && (
          <>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message here."
              className="w-full mt-5"
            />
           

            <button
              onClick={handleCopyToClipboard}
              className="absolute top-0 right-0 p-2 cursor-pointer"
              title="Copy to Clipboard"
            >
              {isTextCopied ? <CopyCheck /> : <Copy />}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
