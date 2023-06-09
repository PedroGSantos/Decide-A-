import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";

function Menu() {
	function openMenu() {
		const btn = document.getElementById("menu-btn");
		const nav = document.getElementById("menu");
		const menu = document.getElementById("optionsMenu");

		btn.classList.toggle("open");
		nav.classList.toggle("flex");
		nav.classList.toggle("hidden");
		if (menu.style.display == "block") menu.style.display = "none";
		else menu.style.display = "block";
	}
	const url = [
		{
			name: "Filmes Assistidos",
			url: "/filmesAssistidos",
		},
		{
			name: "Sugerir Filmes",
			url: "/sugerirFilmes",
		},
	];
	return (
		<div>
			<nav className="na+vbar relative container mx-auto p-4">
				<div className="flex items-center justify-between">
					<div className="pt-2 flex space-x-6">
						<p className="bebas-neue md:text-6xl text-4xl text-red-500">
							DECIDE AÍ
						</p>
					</div>
					<div className="hidden md:flex space-x-8">
						{url.map((data) => (
							<Link to={data.url} className="hover:text-red-700">
								{" "}
								{data.name}{" "}
							</Link>
						))}
						<Link to="/login">
							<FontAwesomeIcon
								className="hover:text-red-700"
								icon={faRightFromBracket}
							/>
						</Link>
					</div>

					<button
						id="menu-btn"
						class="block hamburger md:hidden focus:outline-none"
						onClick={openMenu}
					>
						<span className="hamburger-top"></span>
						<span className="hamburger-middle"></span>
						<span className="hamburger-bottom"></span>
					</button>
				</div>
				<div id="optionsMenu">
					<div
						id="menu"
						className="absolute flex-col items-center self-end hidden py-8 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
					>
						{url.map((data) => (
							<Link to={data.url} class="hover:text-red-700">
								{" "}
								{data.name}{" "}
							</Link>
						))}
						<Link to={"/"} class="hover:text-red-700">
							Sair
						</Link>
					</div>
				</div>
			</nav>
			<hr />
		</div>
	);
}

export default Menu;
