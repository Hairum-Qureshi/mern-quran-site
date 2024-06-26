import home_css from "../css/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<>
			<div className={home_css["top-container"]}>
				<div className={home_css["shahada-overlay"]}>
					<img
						src="https://i.ibb.co/8zbxCdS/360-F-589240830-921ff-HQTIHXZz1-STblo1hn-BZHh-Mac2nn-removebg-preview-1.png"
						alt=""
					/>
				</div>
				<img
					src="https://img.freepik.com/premium-photo/holy-quran-with-arabic-calligraphy-meaning-al-quran-tasbih-rosary-beads-black-background-selective-focus-copy-space_759200-29.jpg"
					alt="Background Image"
					className={home_css["background-image"]}
				/>
				<div className={home_css["search-container"]}>
					<div className={home_css["search-bar"]}>
						<span>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</span>
						<input type="search" placeholder="Search for a chapter" />
					</div>
				</div>
			</div>
		</>
	);
}
