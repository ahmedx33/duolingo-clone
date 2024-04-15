import Image from "next/image";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

export default function UserDataNav() {
    return (
        <nav className="w-[400px] h-screen">
            <section>
                <span>
                    <RiLightbulbFlashFill />
                </span>

                <span>
                    <FaHeart />
                </span>
            </section>

            <section>Hello world</section>
        </nav>
    );
}
