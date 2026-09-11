import * as projectMapper from './project.mapper';
import * as viewModel from './project.vm';

describe('project mapper', () => {
    describe('mapProjectFromApiToVm', () => {
        it('deberia devolver un proyecto vacio cuando se le pasa undefined', () => {
            const emptyProject = {
                id: '',
                name: '',
                externalId: '',
                comments: '',
                isActive: false,
                employees: [],
              };
            vitest.spyOn(viewModel, 'createEmptyProject').mockReturnValue(emptyProject);

            const result = projectMapper.mapProjectFromApiToVm(undefined);
            
            expect(viewModel.createEmptyProject).toHaveBeenCalled();
            expect(result).toEqual(emptyProject);
        });

        it('deberia devolver un proyecto con los datos del api', () => {
            const project = {
                id: '1',
                name: 'Project 1',
                externalId: '123',
                comments: 'Comments',
                isActive: true,
                employees: [
                    {
                        id: '1',
                        employeeName: 'Employee 1',
                        isAssigned: true,
                    },
                    {
                        id: '2',
                        employeeName: 'Employee 2',
                    },
                ],
            };
            const result = projectMapper.mapProjectFromApiToVm(project);
            expect(result).toEqual(project);
        });
    })
});
