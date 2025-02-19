import dynamic from 'next/dynamic'
const ReactPlayer =dynamic((e) => import('react-player'), { ssr: false })

export default function Banner(props) {
  return (
    <div className="banner">
      <div className="videos_banner">
        <ReactPlayer
          className="react-player"
          playing
          muted
          loop
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true,
                loop: true
              }
            }
          }}
          width={"100%"}
          url="/videos/HomePage.mp4"
        />
      </div>
      <h1 className="pagevtitle">{props.pageTitle}</h1>
    </div>
  );
}
