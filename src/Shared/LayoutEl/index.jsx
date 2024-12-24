import CallToAction from "../CallToAction";
import FooterEl from "../FooterEl";
import NavBar from "../NavbarEl/Navigation/NavBar";

const LayoutEl = ({ children }) => {
    return (
        <>
            <div className="bg-gray-50">
                <NavBar />
                {children}
                {/* <CallToAction/> */}
                <FooterEl/>
            </div>
        </>
    );
};

export default LayoutEl;
