import Image from "next/image";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

export default function UserDataNav() {
    return (
        <nav className="w-[400px] h-screen px-4 py-7 flex justify-center">
            <section>
                <section className="flex items-center">
                    <span>
                        <RiLightbulbFlashFill color="#1CB0F6" size={30} />
                    </span>

                    <span>
                        <FaHeart color="#FF4B4B" size={30} />
                    </span>
                </section>

                <section>Hello world</section>
            </section>
        </nav>
    );
}
