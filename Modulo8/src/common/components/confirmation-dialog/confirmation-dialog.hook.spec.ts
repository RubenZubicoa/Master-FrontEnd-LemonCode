import { act, renderHook } from '@testing-library/react';
import { Lookup } from '#common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('confirmation dialog hook', () => {
  it('deberia devolver un estado inicial con isOpen false y itemToDelete vacio', () => {
    const emptyLookup: Lookup = { id: '', name: '' };

    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });

  it('deberia abrir el dialog y guardar el item cuando se llama a onOpenDialog', () => {
    const item: Lookup = { id: '1', name: 'Test item' };
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('deberia cerrar el dialog cuando se llama a onClose', () => {
    const item: Lookup = { id: '1', name: 'Test item' };
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('deberia vaciar itemToDelete cuando se llama a onAccept', () => {
    const item: Lookup = { id: '1', name: 'Test item' };
    const emptyLookup: Lookup = { id: '', name: '' };
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });
});
