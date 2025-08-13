import type React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const AppLayout = ({
  children,
  showHeaderFooter = false,
}: Readonly<{ children: React.ReactNode; showHeaderFooter?: boolean }>) => {
  return (
    <div
      className={`flex flex-col min-h-screen w-full bg-[#000] ${
        showHeaderFooter ? "xl:px-10 lg:px-5 px-2 py-3" : ""
      }`}
    >
      {/* Conditionally render Header */}
      {showHeaderFooter && <Header />}

      {/* Main Contents */}
      <main>
        <div>
          <div className="">{children}</div>
        </div>
      </main>

      {/* Conditionally render Footer */}
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
