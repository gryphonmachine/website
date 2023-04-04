export const VideoEmbed = (props: any) => {
  return (
    <div className="flex items-center justify-center mt-5 aspect-w-8 aspect-h-7">
      <iframe
        src={`https://www.youtube.com/embed/${props.id}?modestbranding=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};
