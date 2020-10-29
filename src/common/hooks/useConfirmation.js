import React from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export function useConfirmation(options) {
  const [isOpen, setOpen] = React.useState(false);

  const handleYesClick = () => {
    options.onConfirm();
    setOpen(false);
  };

  const renderFooter = () => (
    <div>
      <Button
        className="p-button-text"
        label="No"
        icon="pi pi-times"
        onClick={() => setOpen(false)}
      />
      <Button label="Yes" icon="pi pi-check" onClick={handleYesClick} />
    </div>
  );

  const Component = () => (
    <Dialog
      modal
      visible={isOpen}
      header={options.headerText}
      footer={renderFooter()}
      onHide={() => setOpen(false)}
    >
      {options.bodyText}
    </Dialog>
  );

  return {
    isOpen,
    setOpen,
    Component,
  };
}
