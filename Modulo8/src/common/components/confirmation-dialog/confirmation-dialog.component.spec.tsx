import { fireEvent, render } from "@testing-library/react";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";
import React from "react";

describe('confirmation dialog component', () => {
    it('deberia mostrar el componente cuando isOpen es true', () => {
        const isOpen = true;
        const onAccept = vitest.fn();
        const onClose = vitest.fn();
        const title = 'Test Title';
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        };
        const children = '<div>Test Children</div>';
        const component = render(<ConfirmationDialogComponent isOpen={isOpen} onAccept={onAccept} onClose={onClose} title={title} labels={labels} children={children} />);
        expect(component).toBeTruthy();
    });

    it('deberia llamar a onAccept cuando se hace click en el boton de aceptar', () => {
        const isOpen = true;
        const onAccept = vitest.fn();
        const onClose = vitest.fn();
        const title = 'Test Title';
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        };
        const children = '<div>Test Children</div>';
        const component = render(<ConfirmationDialogComponent isOpen={isOpen} onAccept={onAccept} onClose={onClose} title={title} labels={labels} children={children} />);
        const acceptButton = component.getByText('Accept');
        fireEvent.click(acceptButton);
        expect(onAccept).toHaveBeenCalled();
    });

    it('deberia llamar a onClose cuando se hace click en el boton de cerrar', () => {
        const isOpen = true;
        const onAccept = vitest.fn();
        const onClose = vitest.fn();
        const title = 'Test Title';
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        };
        const children = '<div>Test Children</div>';
        const component = render(<ConfirmationDialogComponent isOpen={isOpen} onAccept={onAccept} onClose={onClose} title={title} labels={labels} children={children} />);
        const closeButton = component.getByText('Close');
        fireEvent.click(closeButton);
        expect(onClose).toHaveBeenCalled();
    });

    it('deberia mostrar el titulo cuando se le pasa un titulo', () => {
        const isOpen = true;
        const onAccept = vitest.fn();
        const onClose = vitest.fn();
        const title = 'Test Title';
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        };
        const children = '<div>Test Children</div>';
        const component = render(<ConfirmationDialogComponent isOpen={isOpen} onAccept={onAccept} onClose={onClose} title={title} labels={labels} children={children} />);
        const titleElement = component.getByText(title);
        expect(titleElement).toBeTruthy();
    });

    it('deberia mostrar el contenido cuando se le pasa un contenido', () => {
        const isOpen = true;
        const onAccept = vitest.fn();
        const onClose = vitest.fn();
        const title = 'Test Title';
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        };
        const children = '<div>Test Children</div>';
        const component = render(<ConfirmationDialogComponent isOpen={isOpen} onAccept={onAccept} onClose={onClose} title={title} labels={labels} children={children} />);
        const childrenElement = component.getByText(children);
        expect(childrenElement).toBeTruthy();
    });

    it('deberia mostrar el boton de cerrar cuando se le pasa un boton de cerrar', () => {
        const isOpen = true;
        const onAccept = vitest.fn();
        const onClose = vitest.fn();
        const title = 'Test Title';
        const labels = {
            closeButton: 'Close',
            acceptButton: 'Accept',
        };
        const children = '<div>Test Children</div>';
        const component = render(<ConfirmationDialogComponent isOpen={isOpen} onAccept={onAccept} onClose={onClose} title={title} labels={labels} children={children} />);
        const closeButton = component.getByText('Close');
        expect(closeButton).toBeTruthy();
    });
});