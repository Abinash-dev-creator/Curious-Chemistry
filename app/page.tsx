"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Complete periodic table data with all 118 elements
    const elements = [
      // Row 1
      { number: 1, symbol: "H", name: "Hydrogen", category: "nonmetal", row: 1, col: 1 },
      { number: 2, symbol: "He", name: "Helium", category: "noble-gas", row: 1, col: 18 },

      // Row 2
      { number: 3, symbol: "Li", name: "Lithium", category: "alkali-metal", row: 2, col: 1 },
      { number: 4, symbol: "Be", name: "Beryllium", category: "alkaline-earth", row: 2, col: 2 },
      { number: 5, symbol: "B", name: "Boron", category: "metalloid", row: 2, col: 13 },
      { number: 6, symbol: "C", name: "Carbon", category: "nonmetal", row: 2, col: 14 },
      { number: 7, symbol: "N", name: "Nitrogen", category: "nonmetal", row: 2, col: 15 },
      { number: 8, symbol: "O", name: "Oxygen", category: "nonmetal", row: 2, col: 16 },
      { number: 9, symbol: "F", name: "Fluorine", category: "nonmetal", row: 2, col: 17 },
      { number: 10, symbol: "Ne", name: "Neon", category: "noble-gas", row: 2, col: 18 },

      // Row 3
      { number: 11, symbol: "Na", name: "Sodium", category: "alkali-metal", row: 3, col: 1 },
      { number: 12, symbol: "Mg", name: "Magnesium", category: "alkaline-earth", row: 3, col: 2 },
      { number: 13, symbol: "Al", name: "Aluminum", category: "post-transition", row: 3, col: 13 },
      { number: 14, symbol: "Si", name: "Silicon", category: "metalloid", row: 3, col: 14 },
      { number: 15, symbol: "P", name: "Phosphorus", category: "nonmetal", row: 3, col: 15 },
      { number: 16, symbol: "S", name: "Sulfur", category: "nonmetal", row: 3, col: 16 },
      { number: 17, symbol: "Cl", name: "Chlorine", category: "nonmetal", row: 3, col: 17 },
      { number: 18, symbol: "Ar", name: "Argon", category: "noble-gas", row: 3, col: 18 },

      // Row 4
      { number: 19, symbol: "K", name: "Potassium", category: "alkali-metal", row: 4, col: 1 },
      { number: 20, symbol: "Ca", name: "Calcium", category: "alkaline-earth", row: 4, col: 2 },
      { number: 21, symbol: "Sc", name: "Scandium", category: "transition-metal", row: 4, col: 3 },
      { number: 22, symbol: "Ti", name: "Titanium", category: "transition-metal", row: 4, col: 4 },
      { number: 23, symbol: "V", name: "Vanadium", category: "transition-metal", row: 4, col: 5 },
      { number: 24, symbol: "Cr", name: "Chromium", category: "transition-metal", row: 4, col: 6 },
      { number: 25, symbol: "Mn", name: "Manganese", category: "transition-metal", row: 4, col: 7 },
      { number: 26, symbol: "Fe", name: "Iron", category: "transition-metal", row: 4, col: 8 },
      { number: 27, symbol: "Co", name: "Cobalt", category: "transition-metal", row: 4, col: 9 },
      { number: 28, symbol: "Ni", name: "Nickel", category: "transition-metal", row: 4, col: 10 },
      { number: 29, symbol: "Cu", name: "Copper", category: "transition-metal", row: 4, col: 11 },
      { number: 30, symbol: "Zn", name: "Zinc", category: "transition-metal", row: 4, col: 12 },
      { number: 31, symbol: "Ga", name: "Gallium", category: "post-transition", row: 4, col: 13 },
      { number: 32, symbol: "Ge", name: "Germanium", category: "metalloid", row: 4, col: 14 },
      { number: 33, symbol: "As", name: "Arsenic", category: "metalloid", row: 4, col: 15 },
      { number: 34, symbol: "Se", name: "Selenium", category: "nonmetal", row: 4, col: 16 },
      { number: 35, symbol: "Br", name: "Bromine", category: "nonmetal", row: 4, col: 17 },
      { number: 36, symbol: "Kr", name: "Krypton", category: "noble-gas", row: 4, col: 18 },

      // Row 5
      { number: 37, symbol: "Rb", name: "Rubidium", category: "alkali-metal", row: 5, col: 1 },
      { number: 38, symbol: "Sr", name: "Strontium", category: "alkaline-earth", row: 5, col: 2 },
      { number: 39, symbol: "Y", name: "Yttrium", category: "transition-metal", row: 5, col: 3 },
      { number: 40, symbol: "Zr", name: "Zirconium", category: "transition-metal", row: 5, col: 4 },
      { number: 41, symbol: "Nb", name: "Niobium", category: "transition-metal", row: 5, col: 5 },
      { number: 42, symbol: "Mo", name: "Molybdenum", category: "transition-metal", row: 5, col: 6 },
      { number: 43, symbol: "Tc", name: "Technetium", category: "transition-metal", row: 5, col: 7 },
      { number: 44, symbol: "Ru", name: "Ruthenium", category: "transition-metal", row: 5, col: 8 },
      { number: 45, symbol: "Rh", name: "Rhodium", category: "transition-metal", row: 5, col: 9 },
      { number: 46, symbol: "Pd", name: "Palladium", category: "transition-metal", row: 5, col: 10 },
      { number: 47, symbol: "Ag", name: "Silver", category: "transition-metal", row: 5, col: 11 },
      { number: 48, symbol: "Cd", name: "Cadmium", category: "transition-metal", row: 5, col: 12 },
      { number: 49, symbol: "In", name: "Indium", category: "post-transition", row: 5, col: 13 },
      { number: 50, symbol: "Sn", name: "Tin", category: "post-transition", row: 5, col: 14 },
      { number: 51, symbol: "Sb", name: "Antimony", category: "metalloid", row: 5, col: 15 },
      { number: 52, symbol: "Te", name: "Tellurium", category: "metalloid", row: 5, col: 16 },
      { number: 53, symbol: "I", name: "Iodine", category: "nonmetal", row: 5, col: 17 },
      { number: 54, symbol: "Xe", name: "Xenon", category: "noble-gas", row: 5, col: 18 },

      // Row 6
      { number: 55, symbol: "Cs", name: "Cesium", category: "alkali-metal", row: 6, col: 1 },
      { number: 56, symbol: "Ba", name: "Barium", category: "alkaline-earth", row: 6, col: 2 },
      { number: 57, symbol: "La", name: "Lanthanum", category: "lanthanide", row: 8, col: 3 }, // Lanthanide series starts
      { number: 58, symbol: "Ce", name: "Cerium", category: "lanthanide", row: 8, col: 4 },
      { number: 59, symbol: "Pr", name: "Praseodymium", category: "lanthanide", row: 8, col: 5 },
      { number: 60, symbol: "Nd", name: "Neodymium", category: "lanthanide", row: 8, col: 6 },
      { number: 61, symbol: "Pm", name: "Promethium", category: "lanthanide", row: 8, col: 7 },
      { number: 62, symbol: "Sm", name: "Samarium", category: "lanthanide", row: 8, col: 8 },
      { number: 63, symbol: "Eu", name: "Europium", category: "lanthanide", row: 8, col: 9 },
      { number: 64, symbol: "Gd", name: "Gadolinium", category: "lanthanide", row: 8, col: 10 },
      { number: 65, symbol: "Tb", name: "Terbium", category: "lanthanide", row: 8, col: 11 },
      { number: 66, symbol: "Dy", name: "Dysprosium", category: "lanthanide", row: 8, col: 12 },
      { number: 67, symbol: "Ho", name: "Holmium", category: "lanthanide", row: 8, col: 13 },
      { number: 68, symbol: "Er", name: "Erbium", category: "lanthanide", row: 8, col: 14 },
      { number: 69, symbol: "Tm", name: "Thulium", category: "lanthanide", row: 8, col: 15 },
      { number: 70, symbol: "Yb", name: "Ytterbium", category: "lanthanide", row: 8, col: 16 },
      { number: 71, symbol: "Lu", name: "Lutetium", category: "lanthanide", row: 8, col: 17 },
      { number: 72, symbol: "Hf", name: "Hafnium", category: "transition-metal", row: 6, col: 4 },
      { number: 73, symbol: "Ta", name: "Tantalum", category: "transition-metal", row: 6, col: 5 },
      { number: 74, symbol: "W", name: "Tungsten", category: "transition-metal", row: 6, col: 6 },
      { number: 75, symbol: "Re", name: "Rhenium", category: "transition-metal", row: 6, col: 7 },
      { number: 76, symbol: "Os", name: "Osmium", category: "transition-metal", row: 6, col: 8 },
      { number: 77, symbol: "Ir", name: "Iridium", category: "transition-metal", row: 6, col: 9 },
      { number: 78, symbol: "Pt", name: "Platinum", category: "transition-metal", row: 6, col: 10 },
      { number: 79, symbol: "Au", name: "Gold", category: "transition-metal", row: 6, col: 11 },
      { number: 80, symbol: "Hg", name: "Mercury", category: "transition-metal", row: 6, col: 12 },
      { number: 81, symbol: "Tl", name: "Thallium", category: "post-transition", row: 6, col: 13 },
      { number: 82, symbol: "Pb", name: "Lead", category: "post-transition", row: 6, col: 14 },
      { number: 83, symbol: "Bi", name: "Bismuth", category: "post-transition", row: 6, col: 15 },
      { number: 84, symbol: "Po", name: "Polonium", category: "post-transition", row: 6, col: 16 },
      { number: 85, symbol: "At", name: "Astatine", category: "metalloid", row: 6, col: 17 },
      { number: 86, symbol: "Rn", name: "Radon", category: "noble-gas", row: 6, col: 18 },

      // Row 7
      { number: 87, symbol: "Fr", name: "Francium", category: "alkali-metal", row: 7, col: 1 },
      { number: 88, symbol: "Ra", name: "Radium", category: "alkaline-earth", row: 7, col: 2 },
      { number: 89, symbol: "Ac", name: "Actinium", category: "actinide", row: 9, col: 3 }, // Actinide series starts
      { number: 90, symbol: "Th", name: "Thorium", category: "actinide", row: 9, col: 4 },
      { number: 91, symbol: "Pa", name: "Protactinium", category: "actinide", row: 9, col: 5 },
      { number: 92, symbol: "U", name: "Uranium", category: "actinide", row: 9, col: 6 },
      { number: 93, symbol: "Np", name: "Neptunium", category: "actinide", row: 9, col: 7 },
      { number: 94, symbol: "Pu", name: "Plutonium", category: "actinide", row: 9, col: 8 },
      { number: 95, symbol: "Am", name: "Americium", category: "actinide", row: 9, col: 9 },
      { number: 96, symbol: "Cm", name: "Curium", category: "actinide", row: 9, col: 10 },
      { number: 97, symbol: "Bk", name: "Berkelium", category: "actinide", row: 9, col: 11 },
      { number: 98, symbol: "Cf", name: "Californium", category: "actinide", row: 9, col: 12 },
      { number: 99, symbol: "Es", name: "Einsteinium", category: "actinide", row: 9, col: 13 },
      { number: 100, symbol: "Fm", name: "Fermium", category: "actinide", row: 9, col: 14 },
      { number: 101, symbol: "Md", name: "Mendelevium", category: "actinide", row: 9, col: 15 },
      { number: 102, symbol: "No", name: "Nobelium", category: "actinide", row: 9, col: 16 },
      { number: 103, symbol: "Lr", name: "Lawrencium", category: "actinide", row: 9, col: 17 },
      { number: 104, symbol: "Rf", name: "Rutherfordium", category: "transition-metal", row: 7, col: 4 },
      { number: 105, symbol: "Db", name: "Dubnium", category: "transition-metal", row: 7, col: 5 },
      { number: 106, symbol: "Sg", name: "Seaborgium", category: "transition-metal", row: 7, col: 6 },
      { number: 107, symbol: "Bh", name: "Bohrium", category: "transition-metal", row: 7, col: 7 },
      { number: 108, symbol: "Hs", name: "Hassium", category: "transition-metal", row: 7, col: 8 },
      { number: 109, symbol: "Mt", name: "Meitnerium", category: "transition-metal", row: 7, col: 9 },
      { number: 110, symbol: "Ds", name: "Darmstadtium", category: "transition-metal", row: 7, col: 10 },
      { number: 111, symbol: "Rg", name: "Roentgenium", category: "transition-metal", row: 7, col: 11 },
      { number: 112, symbol: "Cn", name: "Copernicium", category: "transition-metal", row: 7, col: 12 },
      { number: 113, symbol: "Nh", name: "Nihonium", category: "post-transition", row: 7, col: 13 },
      { number: 114, symbol: "Fl", name: "Flerovium", category: "post-transition", row: 7, col: 14 },
      { number: 115, symbol: "Mc", name: "Moscovium", category: "post-transition", row: 7, col: 15 },
      { number: 116, symbol: "Lv", name: "Livermorium", category: "post-transition", row: 7, col: 16 },
      { number: 117, symbol: "Ts", name: "Tennessine", category: "post-transition", row: 7, col: 17 },
      { number: 118, symbol: "Og", name: "Oganesson", category: "noble-gas", row: 7, col: 18 },

      // Placeholder for lanthanide label
      { number: 0, symbol: "La-Lu", name: "Lanthanides", category: "lanthanide-label", row: 6, col: 3 },

      // Placeholder for actinide label
      { number: 0, symbol: "Ac-Lr", name: "Actinides", category: "actinide-label", row: 7, col: 3 },
    ]

    // Function to fetch element information from Wikipedia
    function fetchElementInfo(elementName) {
      const elementInfo = document.getElementById("elementInfo")
      const elementNameEl = document.getElementById("elementName")
      const elementSymbolEl = document.getElementById("elementSymbol")
      const elementDescriptionEl = document.getElementById("elementDescription")

      // Show loading state
      elementInfo.classList.remove("hidden")
      elementNameEl.textContent = elementName
      elementSymbolEl.textContent = "Loading..."
      elementDescriptionEl.textContent = "Fetching information..."

      // Fetch from Wikipedia API
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${elementName}`

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          // Update the flashcard with the fetched data
          elementNameEl.textContent = data.title
          elementSymbolEl.textContent = elements.find((e) => e.name === elementName)?.symbol || ""
          elementDescriptionEl.innerHTML = `
            <p>${data.extract}</p>
            ${data.thumbnail ? `<img src="${data.thumbnail.source}" alt="${elementName}" class="mt-4 mx-auto max-h-48">` : ""}
          `
        })
        .catch((error) => {
          console.error("Error fetching element info:", error)
          elementDescriptionEl.textContent =
            "Sorry, we could not fetch information for this element. Please try again later."
        })
    }

    // Generate the periodic table
    const periodicTable = document.getElementById("periodicTable")
    if (periodicTable) {
      // Clear any existing content
      periodicTable.innerHTML = ""

      // Create a grid for the periodic table
      const grid = document.createElement("div")
      grid.className = "grid grid-cols-18 gap-1"
      periodicTable.appendChild(grid)

      // Create a 9x18 grid with placeholders (7 main rows + 2 rows for lanthanides and actinides)
      for (let row = 1; row <= 9; row++) {
        for (let col = 1; col <= 18; col++) {
          // Find if there's an element at this position
          const element = elements.find((e) => e.row === row && e.col === col)

          const cell = document.createElement("div")

          if (element) {
            cell.className = `element ${element.category}`

            // Special styling for lanthanide/actinide labels
            if (element.category.includes("label")) {
              cell.innerHTML = `
                <span class="element-symbol text-xs">${element.symbol}</span>
              `
            } else {
              cell.innerHTML = `
                <span class="element-number">${element.number}</span>
                <span class="element-symbol">${element.symbol}</span>
                <span class="element-name">${element.name}</span>
              `
              cell.setAttribute("data-element", element.name)
              cell.onclick = () => fetchElementInfo(element.name)
            }
          }

          grid.appendChild(cell)
        }
      }
    }

    // Close button functionality
    const closeButton = document.getElementById("closeCard")
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        const elementInfo = document.getElementById("elementInfo")
        if (elementInfo) {
          elementInfo.classList.add("hidden")
        }
      })
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Curious Chemistry</h1>
        <p className="mt-2">Explore the elements of our world!</p>
      </header>

      <main className="flex-grow p-4 md:p-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interactive Periodic Table</h2>
          <p className="mb-4">Click on any element to learn more about it!</p>
        </div>

        <div id="periodicTable" className="mb-8 overflow-x-auto"></div>

        <div id="elementInfo" className="hidden max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 id="elementName" className="text-2xl font-bold"></h3>
              <p id="elementSymbol" className="text-xl"></p>
            </div>
            <button id="closeCard" className="text-gray-500 hover:text-gray-700">
              <span className="text-2xl">×</span>
            </button>
          </div>
          <div id="elementDescription" className="mt-4"></div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          Creator →{" "}
          <a
            href="https://github.com/Abinash-dev-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 underline"
          >
            Abinash_Dev_Creator
          </a>
        </p>
      </footer>
    </div>
  )
}
