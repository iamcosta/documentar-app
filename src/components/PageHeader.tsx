import { Button } from "primereact/button";

type PageHeaderProps = {
  title: string;
  onBack?: () => void;
};

export function PageHeader({ title, onBack }: PageHeaderProps) {
  return (
    <div className="flex h-4rem border-bottom-1 border-gray-400 shadow-1 gap-2 align-items-center px-4">
      {onBack && (
        <Button icon="pi pi-arrow-left" text rounded onClick={() => onBack()} />
      )}
      <h3 className="m-0">{title}</h3>
    </div>
  );
}
