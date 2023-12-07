import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  const menuModel: MenuItem[] = [
    { label: "Responsáveis", icon: "pi pi-users" },
    { label: "Dependentes", icon: "pi pi-user" },
  ];

  return (
    <div className="flex flex-1 flex-column h-screen surface-ground relative pb-5">
      <header className="h-12rem flex flex-column shadow-1 bg-primary">
        <div className="flex h-full justify-content-center align-items-center">
          <h1 className="m-0">Documentar App</h1>
        </div>
        <Menubar
          model={menuModel}
          className="border-noround w-full h-3rem bg-white"
        />
      </header>
      <main className="h-full overflow-y-auto">
        <div className="flex lg:col-8 m-auto my-4">
          <Outlet />
        </div>
      </main>
      <footer className="fixed bottom-0 text-white bg-gray-800 w-full h-2rem flex justify-content-center align-items-center">
        v1.0.0
      </footer>
    </div>
  );
}
