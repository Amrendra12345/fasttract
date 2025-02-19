import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const ChatHot = () => {
  return (
    <>
      <div className="chat_tms">
        <div className="tms">
          <Link
            href={
              "https://desk.hottrix.in/show_form.php?form_id=U3FYR3R3VUZ1V2JWN3F4SExlT0p0UT09:cebca1b3d2a6c327d379fbcdfd9c257dafa3908e8693968d4e5da26fd430f492"
            }
          >
            <Image
              src={"/img/bls-qms.jpg"}
              width={200}
              height={90}
              alt="bls-qms"
              className="img-fluid"
            />
          </Link>
        </div>
      </div>
      <div
        data-hottrix-secret-key="bGJrbjdrbjJFcDFITG9POHppVmdXQT09:a23c5908aa0ddd8d45130b8364217b3e01a8c7cf6bf6e9370d678783f23f1b9f"
        id="hottrix_chat_widow_initiate_root"
      ></div>
      <Script src="https://desk.hottrix.in/modules/hotbot_version_two/hotbot2.js"></Script>
    </>
  );
};

export default ChatHot;
