import WhatsAppWidget from "react-whatsapp-chat-widget";
import "@/styles/WhatsAppWeget.css";
import onatiGlobalLogo from "@/public/images/logo/onati_global.png"; // Import the logo
import Image from "next/image";

const image = "/images/logo/onatigloballogo.svg"
const WhatsAppWeget = () => {
  return (
    <WhatsAppWidget
      phoneNo="+916200830664"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="50"
      iconColor="white"
      iconBgColor="#39ac31"
      headerIcon={image} // Use the imported logo
      headerIconColor="red"
      headerTxtColor="#fff"
      headerBgColor="#4a044e"
      headerTitle="Onati Global"
      headerCaption="Online"
      bodyBgColor="#d946ef"
      chatPersonName="Support"
      chatMessage={<>Hi there 👋 <br /> How can I help you?</>}
      footerBgColor="#4a044e"
      placeholder="Type a message.."
      btnBgColor="#f0abfc"
      btnTxt="Let's Chat"
      btnTxtColor="#4a044e"
    />
  );
};

export default WhatsAppWeget;
