import { BuilderComponent } from './builder.component';

describe('BuilderComponent', () => {
	let component: BuilderComponent;
  
	beforeEach(() => {
		component = new BuilderComponent();
	});
  
	it('should change form mode correctly', () => {
		const event = { target: { value: 'testMode' } };
		component.changeMode(event);
		expect(component.formMode).toBe('testMode');
	});
  
	it('should render template correctly', () => {
		const event = { target: { value: 1 } };
		component.formTemplates = [{ title: 'Template 1', display: 'form', components: [] }];
		component.renderTemplate(event);
		expect(component.selectedFormIndex).toBe(1);
	});

	it('should update form correctly in setForm method', () => {
		const mockForm = { title: 'Test Form', display: 'form', components: [] };
		component.setForm(mockForm);
		expect(component.form).toEqual(mockForm);
	});

	it('should use default form mode in setForm method when no form object is provided', () => {
		component.setForm();        
		expect(component.form.display).toBe(component.formMode);
	});

	it('should load formTemplates correctly from localStorage', () => {
		const mockData = [{ title: 'Form 1', display: 'form', components: [] }];
		localStorage.setItem('formData', JSON.stringify(mockData));
		component.loadFromLocal();
		expect(component.formTemplates).toEqual(mockData);
	});

	// if formData is fails to load from local storage for that given test cases is written

	// it('should not update formTemplates if no data found in localStorage', () => {
	//     localStorage.removeItem('formData');
	//     component.loadFromLocal();
	//     expect(component.formTemplates).toBeUndefined();
	// });

    
    
});
  