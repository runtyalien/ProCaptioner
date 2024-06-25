import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text = {'Elevate Your Videos with Stunning Captions'}
        h2Text = {'Upload your video and we’ll take care of the captions'}
        
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  );
}
