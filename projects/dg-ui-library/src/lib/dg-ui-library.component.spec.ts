import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgUiLibraryComponent } from './dg-ui-library.component';

describe('DgUiLibraryComponent', () => {
  let component: DgUiLibraryComponent;
  let fixture: ComponentFixture<DgUiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DgUiLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DgUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
