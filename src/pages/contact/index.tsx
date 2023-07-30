import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '@/app/globals.css'
import FormContact from "@/components/FormContact";

const Contact = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col">
                <Header />
                <div className="h-full w-full flex flex-col">
                    <FormContact />
                </div>
                <Footer HideWorkTogether={false} />
            </div>
        </>
    );
}

export default Contact;