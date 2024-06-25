import SparklesIcon from "@/components/SparklesIcon";

export default function DemoSection() {
  return (
    <section className="flex justify-around mt-8 sm:mt-12 items-center">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video src="https://captio.s3.ap-south-1.amazonaws.com/Demo_without_subtitles.mp4" preload muted autoPlay loop></video>
      </div>
      <div className="hidden sm:block">
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video src="https://captio.s3.ap-south-1.amazonaws.com/Demo_with_subtitles.mp4" preload muted autoPlay loop></video>
      </div>
    </section>
  );
}