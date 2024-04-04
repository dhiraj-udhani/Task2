import { of } from "rxjs";
import { SyncGridsComponentOld } from "./sync-grids-old.component";
import { TestBed } from "@angular/core/testing";
import { ApiService } from "../../../Services/Api.service";


describe('SyncGridsComponentOld', () => {
    let component = new SyncGridsComponentOld;

    const apiServiceMock = {
        get : jest.fn() // mocking the api
    };
    TestBed.configureTestingModule({
        providers: [
          { provide: ApiService, useValue: apiServiceMock }
        ]
      });

    beforeEach(() => {
        component = new SyncGridsComponentOld();

      });
      //component = TestBed.runInInjectionContext(() => new SyncGridsComponentOld(TestBed.inject(ApiService)));
      it('should make API call when both ApiUrl and ApiId are provided', () => {
        component.value = { ApiUrl: 'testUrl', ApiId: 'testId' };
        const mockResponse = { testId: 'testData' };
        apiServiceMock.get.mockReturnValue(of(mockResponse));
    
        component.getApiCall();
    
        expect(apiServiceMock.get).toHaveBeenCalledWith('testUrl');
        expect(component.dataSource).toEqual('testData');
        expect(component.createDynamicColumns).toHaveBeenCalled();
      });

      it('should load grid state when state is found in localStorage', () => {
        const mockState = { /* mock grid state */ };
        const gridComponentMock = jest.fn();
        localStorage.getItem = jest.fn().mockReturnValue(JSON.stringify(mockState));
    
        component.loadGridState();
    
        expect(localStorage.getItem).toHaveBeenCalledWith('gridData');
        expect(component.state).toEqual(mockState);
        expect(component.updateHeaderForColumns).toHaveBeenCalled();
        expect(gridComponentMock).toHaveBeenCalledWith(mockState);
        expect(component.message).toEqual('Previous grid state restored.');
      });

      

});