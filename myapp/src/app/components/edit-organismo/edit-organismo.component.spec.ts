import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrganismoComponent } from './edit-organismo.component';

describe('EditOrganismoComponent', () => {
  let component: EditOrganismoComponent;
  let fixture: ComponentFixture<EditOrganismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOrganismoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrganismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
