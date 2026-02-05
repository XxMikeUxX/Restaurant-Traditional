"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { url } from "inspector";

// Decorative Cactus SVG Component
const CactusSVG = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 60 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 10C30 10 30 5 30 5C30 2 32 0 35 0C38 0 40 2 40 5V25C40 28 42 30 45 30H50C53 30 55 32 55 35C55 38 53 40 50 40H45C42 40 40 42 40 45V110C40 115 35 120 30 120C25 120 20 115 20 110V45C20 42 18 40 15 40H10C7 40 5 38 5 35C5 32 7 30 10 30H15C18 30 20 28 20 25V5C20 2 22 0 25 0C28 0 30 2 30 5V10Z"
      fill="currentColor"
    />
  </svg>
);

// Chile pepper decorative element
const ChileSVG = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C12 0 14 2 14 5C14 8 12 10 12 10C12 10 10 8 10 5C10 2 12 0 12 0Z"
      fill="#6b7c4f"
    />
    <path
      d="M12 8C16 8 20 15 20 30C20 45 16 55 12 58C8 55 4 45 4 30C4 15 8 8 12 8Z"
      fill="currentColor"
    />
  </svg>
);

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#46403c]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#presentation"
              className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a] transition-colors"
            >
              PRESENTATION
            </Link>
            <Link
              href="#menus"
              className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a] transition-colors"
            >
              NOS MENUS
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col items-center">
              <CactusSVG className="h-10 w-6 text-[#6b7c4f]" />
              <span className="font-cinzel text-2xl tracking-[0.15em] text-white">
                MEXICAN&apos;O
              </span>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#reservations"
              className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a] transition-colors"
            >
              RESERVATIONS
            </Link>
            <Link
              href="#contact"
              className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a] transition-colors"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#46403c]/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="#presentation" className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a]">
                PRESENTATION
              </Link>
              <Link href="#menus" className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a]">
                NOS MENUS
              </Link>
              <Link href="#reservations" className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a]">
                RESERVATIONS
              </Link>
              <Link href="#contact" className="font-cinzel text-sm tracking-[0.2em] text-white hover:text-[#c4663a]">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('images/portada.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center text-white px-4">
      <CactusSVG className="h-20 w-12 text-[#6b7c4f] mx-auto mb-6" />
      <h1 className="font-cinzel text-4xl md:text-6xl tracking-[0.1em] mb-4">
        RESTAURANT MEXICAN&apos;O
      </h1>
      <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.08em] text-[#dbc6a3]">
        LYON
      </h2>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
);

// Featured Dish Section
const FeaturedDish = () => (
  <section className="py-20 bg-[#f9f6f1]">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <CactusSVG className="h-16 w-10 text-[#6b7c4f] mx-auto mb-6" />
      <h2 className="font-cinzel text-3xl md:text-4xl text-[#c4663a] tracking-[0.05em] mb-2">
        MEXICAN&apos;O
      </h2>
      <h3 className="font-cinzel text-2xl md:text-3xl text-[#46403c] tracking-[0.05em] mb-12">
        LYON
      </h3>

      <div className="relative bg-[#46403c] rounded-lg overflow-hidden shadow-2xl max-w-xl mx-auto">
        <div className="aspect-square relative">
          <Image
            src="images\PLATO MIXTO.jpeg"
            alt="Tacos al Pastor"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="font-cinzel text-2xl text-[#dbc6a3] tracking-[0.1em] mb-2">
            PLATO MIXTO
          </h3>
          <Link
            href="#menus"
            className="text-sm text-white/80 hover:text-[#c4663a] transition-colors tracking-wider"
          >
            LIRE PLUS
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// About Section (Le Restaurant, Côté Salle, Côté Cuisine)
const AboutSection = () => (
  <section id="presentation" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Le Restaurant */}
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1/2 hidden lg:block">
            <Image
              src="images/pico de gallo.jpeg"
              alt="Restaurant Interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="lg:ml-auto lg:w-3/4 lg:pl-8">
            <CactusSVG className="h-12 w-7 text-[#6b7c4f] mb-4" />
            <h3 className="font-cinzel text-2xl text-[#c4663a] tracking-[0.05em] mb-6">
              LE RESTAURANT
            </h3>
            <div className="text-[#46403c] text-justify space-y-4 text-sm leading-relaxed">
              <p>
                Mexican&apos;o, vous connaissez ?
              </p>
              <p>
                Ce nom evoque la richesse de la cuisine mexicaine, ses saveurs authentiques et ses traditions ancestrales.
              </p>
              <p>
                Notre cuisine s&apos;inspire des recettes traditionnelles du Mexique, revisitees avec une touche moderne.
              </p>
              <p>
                Le restaurant Mexican&apos;o vous invite a decouvrir son univers gastronomique, l&apos;association d&apos;une cuisine raffinee, realisee par un chef passionne et d&apos;un environnement chaleureux et convivial.
              </p>
              <p>
                Pour notre carte, nous vous offre differentes options de plats et de boissons.
              </p>
              <p>
                Nous proposons une cuisine d&apos;instinct, qui est basee sur le respect, et la saisonnalite des produits.
              </p>
            </div>
          </div>
        </div>

        {/* Côté Salle */}
        <div className="text-center">
          <CactusSVG className="h-12 w-7 text-[#6b7c4f] mx-auto mb-4" />
          <h3 className="font-cinzel text-2xl text-[#c4663a] tracking-[0.05em] mb-6">
            UN PEU DE NOUS
          </h3>
          <div className="text-[#46403c] text-justify space-y-4 text-sm leading-relaxed">
            <p>
              Dans un cadre coloré, chaleureux et inspiré des traditions mexicaines, nous accueillons nos clients pour un véritable voyage culinaire : tacos, burritos, enchiladas, quesadillas, guacamole maison et généreux plateaux à partager sont au cœur de notre carte. Les portions sont copieuses, les saveurs équilibrées.
            </p>
            <p>
              Mexican&apos;o est un établissement 100% halal, sans alcool, ce qui en fait une adresse idéale pour les familles, les groupes d&apos;amis et les événements privés souhaitant profiter d&apos;un moment festif en toute sérénité. Notre équipe met un point d&apos;honneur à offrir un accueil chaleureux, un service attentif et une ambiance décontractée, régulièrement salués par notre clientèle lyonnaise.
            </p>
          </div>
          <div className="mt-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#c4663a]/20">
              <Image
                src="images/boo.jpg"
                alt="Decoration"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="font-cinzel text-lg text-[#46403c] mt-4 tracking-wider">
              CARLOS MARTINEZ
            </h4>
            <p className="text-[#8c6554] text-sm">DECORATION</p>
          </div>
        </div>

        {/* Côté Cuisine */}
        <div className="text-center lg:text-left">
          <CactusSVG className="h-12 w-7 text-[#6b7c4f] mx-auto lg:mx-0 mb-4" />
          <h3 className="font-cinzel text-2xl text-[#c4663a] tracking-[0.05em] mb-6">
            COTE CUISINE
          </h3>
          <div className="text-[#46403c] text-justify space-y-4 text-sm leading-relaxed">
            <p>
              Situé au 56 avenue Paul Santy, notre restaurant est facilement accessible en voiture, en bus ou en tramway et propose également la vente à emporter et la livraison via des plateformes partenaires. Ouvert depuis 2020, Mexican&apos;o s&apos;est imposé comme une adresse de référence pour découvrir ou redécouvrir la cuisine mexicaine dans sa version halal, généreuse et conviviale.
            </p>
            <p>
              Nous serions ravis de vous accueillir prochainement et de vous faire partager l&apos;esprit de Mexican&apos;o : une cuisine de partage, authentique et gourmande, au service de vos moments de convivialité.
            </p>
          </div>
          <div className="mt-8">
            <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-[#c4663a]/20">
              <Image
                src="images/deco.jpg"
                alt="deco"
                width={128}
                height={128}
                className="object-cover w-full h-full bg-[#46403c]"
              />
            </div>
            <h4 className="font-cinzel text-lg text-[#46403c] mt-4 tracking-wider">
              DIA DE LOS MUERTOS
            </h4>
            <p className="text-[#8c6554] text-sm">Deco</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Menus Section
const MenusSection = () => (
  <section id="menus" className="py-20 bg-[#f9f6f1]">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <CactusSVG className="h-16 w-10 text-[#6b7c4f] mx-auto mb-6" />
      <h2 className="font-cinzel text-4xl text-[#c4663a] tracking-[0.1em] mb-4">
        MENUS
      </h2>
      <p className="text-[#46403c] max-w-2xl mx-auto mb-4">
        Nous proposons une cuisine d&apos;instinct, qui est basee sur le respect, et la saisonnalite des produits.
      </p>
      <p className="text-[#8c6554] text-sm mb-4">
        Les dessert se demmand sur le restaurant.
      </p>
      <p className="text-[#8c6554] text-sm mb-12">
        Les plats sont 100% hallal.
      </p>

      {/* Menu Déjeuner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden">
          <Image
            src="images/birrias.mp4"
            alt="birrias"
            fill
            className="object-cover"
          />
        </div>
        <div className="menu-card rounded-lg p-8 text-left">
          <h3 className="font-cinzel text-2xl text-[#c4663a] text-center mb-2">
            - Entrées -
          </h3>
          <p className="text-center text-sm text-[#8c6554] mb-6">
            Du Lundi 2 Fevrier jusqu&apos;au Vendredi 13 Fevrier 2026
          </p>

          <div className="space-y-4 mb-8">
            <div className="text-center">
              <h4 className="font-cinzel text-lg text-[#46403c]">
                MENU ATSINA <ChileSVG className="inline h-5 w-2 text-[#c4663a]" /> 28 euros <ChileSVG className="inline h-5 w-2 text-[#c4663a]" />
              </h4>
              <p className="text-sm text-[#8c6554]">(Entree, Plat, Dessert) (Sauf Jours feries)</p>
            </div>
            <div className="text-center">
              <h4 className="font-cinzel text-lg text-[#46403c]">
                MENU MEXICAN&apos;O <ChileSVG className="inline h-5 w-2 text-[#c4663a]" /> 35 euros <ChileSVG className="inline h-5 w-2 text-[#c4663a]" />
              </h4>
              <p className="text-sm text-[#8c6554]">(Entree, Plat, Dessert + Interludes)</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <ChileSVG className="h-6 w-2 text-[#c4663a] mx-auto mb-2" />
              <h5 className="font-cinzel text-[#46403c] mb-2">ENTREE</h5>
              <p className="text-[#8c6554]">Ceviche de Dorade, Avocat, Coriandre</p>
              <p className="text-[#8c6554] my-2">Ou</p>
              <p className="text-[#8c6554]">Guacamole Frais, Totopos Maison</p>
            </div>
            <div>
              <ChileSVG className="h-6 w-2 text-[#c4663a] mx-auto mb-2" />
              <h5 className="font-cinzel text-[#46403c] mb-2">PLAT</h5>
              <p className="text-[#8c6554]">Tacos al Pastor, Ananas, Oignon</p>
              <p className="text-[#8c6554] my-2">Ou</p>
              <p className="text-[#8c6554]">Mole Negro, Poulet, Riz</p>
            </div>
            <div>
              <ChileSVG className="h-6 w-2 text-[#c4663a] mx-auto mb-2" />
              <h5 className="font-cinzel text-[#46403c] mb-2">DESSERT</h5>
              <p className="text-[#8c6554]">Churros, Chocolat, Cannelle</p>
              <p className="text-[#8c6554] my-2">Ou</p>
              <p className="text-[#8c6554]">Flan Napolitano, Caramel</p>
            </div>
          </div>

          <div className="mt-8 bg-[#c4663a] text-white text-center py-3 rounded">
            <p className="font-cinzel text-sm tracking-wider">PRIX NETS TVA ET SERVICE COMPRIS</p>
          </div>
        </div>
      </div>

      {/* Menu Dîner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden lg:order-2">
          <Image
            src="images/melange.jpg"
            alt="Menu Dîner"
            fill
            className="object-cover"
          />
        </div>
        <div className="menu-card rounded-lg p-8 text-left lg:order-1">
          <h3 className="font-cinzel text-2xl text-[#c4663a] text-center mb-2">
            - LES PLATS -
          </h3>
          <p className="text-center text-sm text-[#8c6554] mb-6">
            Janvier 2026
          </p>

          <div className="space-y-4 mb-8">
            <div className="text-center">
              <h4 className="font-cinzel text-lg text-[#46403c]">
                PLATO MIXTO <ChileSVG className="inline h-5 w-2 text-[#c4663a]" /> 60 euros <ChileSVG className="inline h-5 w-2 text-[#c4663a]" />
              </h4>
              <p className="text-sm text-[#8c6554]">(Quesadilla x2, papadzule x2)</p>
            </div>
            <div className="text-center">
              <h4 className="font-cinzel text-lg text-[#46403c]">
                PLATO MIXTO X 3 <ChileSVG className="inline h-5 w-2 text-[#c4663a]" /> 76 euros <ChileSVG className="inline h-5 w-2 text-[#c4663a]" />
              </h4>
              <p className="text-sm text-[#8c6554]">(quesadilla complets, Papadzule x3)</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <ChileSVG className="h-6 w-2 text-[#c4663a] mx-auto mb-2" />
              <h5 className="font-cinzel text-[#46403c] mb-2">ENTREE</h5>
              <p className="text-[#8c6554]">Tostada de Atun, Chile Guajillo</p>
              <p className="text-[#8c6554] my-2">Ou</p>
              <p className="text-[#8c6554]">Quesadilla Flor de Calabaza</p>
            </div>
            <div>
              <ChileSVG className="h-6 w-2 text-[#c4663a] mx-auto mb-2" />
              <h5 className="font-cinzel text-[#46403c] mb-2">PLAT</h5>
              <p className="text-[#8c6554]">Carnitas, Salsa Verde, Cilantro</p>
              <p className="text-[#8c6554] my-2">Ou</p>
              <p className="text-[#8c6554]">Pescado a la Veracruzana</p>
            </div>
            <div>
              <ChileSVG className="h-6 w-2 text-[#c4663a] mx-auto mb-2" />
              <h5 className="font-cinzel text-[#46403c] mb-2">DESSERT</h5>
              <p className="text-[#8c6554]">Tres Leches, Fraises</p>
              <p className="text-[#8c6554] my-2">Ou</p>
              <p className="text-[#8c6554]">Helado de Mezcal, Sal de Gusano</p>
            </div>
          </div>

          <div className="mt-8 bg-[#c4663a] text-white text-center py-3 rounded">
            <p className="font-cinzel text-sm tracking-wider">PRIX NETS TVA ET SERVICE COMPRIS</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Reservation Section
const ReservationSection = () => (
  <section
    id="reservations"
    className="relative py-24 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1920&q=80')`,
    }}
  >
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
      <h2 className="font-cinzel text-4xl md:text-5xl tracking-[0.15em] mb-8">
        RESERVATION
      </h2>
      <div className="space-y-2 mb-8 italic">
        <p className="text-lg">Ouverture</p>
        <p>
          <span className="font-semibold">Pour le dejeuner :</span> Lundi au Vendredi
        </p>
        <p>
          <span className="font-semibold">Pour le diner :</span> Lundi, Mardi, Jeudi et Vendredi
        </p>
        <p>
          <span className="font-semibold">Fermeture :</span> Samedi, Dimanche et Mercredi Soir
        </p>
      </div>
      <Link
        href="#contact"
        className="inline-block bg-[#c4663a] hover:bg-[#a85430] text-white font-cinzel text-lg tracking-[0.1em] px-12 py-4 rounded transition-colors"
      >
        JE RESERVE !
      </Link>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-20 bg-[#f9f6f1]">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-cinzel text-4xl text-[#c4663a] text-center tracking-[0.1em] mb-16">
        Nous contacter
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
        {/* Email */}
        <div>
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <svg className="w-16 h-16 text-[#8c6554]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <a href="mailto:contact@mexicano-restaurant-lyon.fr" className="text-[#46403c] hover:text-[#c4663a] transition-colors">
            mexicanolyon8@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div>
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <svg className="w-16 h-16 text-[#8c6554]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <a href="tel:0665367737" className="text-[#46403c] hover:text-[#c4663a] transition-colors">
            06 65 36 77 37
          </a>
        </div>

        {/* Address */}
        <div>
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <svg className="w-16 h-16 text-[#8c6554]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-[#46403c]">
            56 Av. paul Santi<br />
            69008 Lyon
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.228192614614!2d4.850999315546!3d45.7679999791403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea6615d8c1b5%3A0x9e2b5f5f5f5f5f5f!2s56%20Av.%20Paul%20Santy%2C%2069008%20Lyon!5e0!3m2!1ses!2ses!4v1738830000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
        />
      </div>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="bg-[#6b7c4f] text-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Decorative Element */}
        <div className="hidden md:block">
          <CactusSVG className="h-32 w-20 text-white/30" />
        </div>

        {/* Center - Logo and Links */}
        <div className="text-center">
          <div className="mb-6">
            <CactusSVG className="h-12 w-7 text-white mx-auto mb-2" />
            <h3 className="font-cinzel text-2xl tracking-[0.1em]">MEXICAN&apos;O</h3>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="w-8 h-px bg-white/50" />
              <span className="text-sm italic">Restaurant</span>
              <span className="w-8 h-px bg-white/50" />
            </div>
          </div>

          <nav className="space-y-2 text-sm">
            <Link href="#presentation" className="block hover:text-[#dbc6a3] transition-colors">
              Presentation
            </Link>
            <Link href="#menus" className="block hover:text-[#dbc6a3] transition-colors">
              Nos menus
            </Link>
            <Link href="#reservations" className="block hover:text-[#dbc6a3] transition-colors">
              Reservations
            </Link>
            <Link href="#contact" className="block hover:text-[#dbc6a3] transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right - Social Links */}
        <div className="text-center md:text-right">
          <h4 className="font-cinzel text-lg tracking-wider mb-6">
            RETROUVEZ-NOUS SUR LES RESEAUX SOCIAUX !
          </h4>
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center hover:text-[#dbc6a3] transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center hover:text-[#dbc6a3] transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
        <p>
          Copyright &copy; 2026{" "}
          <Link href="/" className="hover:text-[#dbc6a3] transition-colors">
            Mexican&apos;o
          </Link>
          {" "}| Developpe par{" "}
          <a href="#" className="hover:text-[#dbc6a3] transition-colors">
            Studio Digital
          </a>
          {" "}|{" "}
          <a href="#" className="hover:text-[#dbc6a3] transition-colors">
            Mentions legales
          </a>
        </p>
      </div>
    </div>
  </footer>
);

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedDish />
      <AboutSection />
      <MenusSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
