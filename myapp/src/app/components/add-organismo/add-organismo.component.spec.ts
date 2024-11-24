import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganismoComponent } from './add-organismo.component';

describe('AddOrganismoComponent', () => {
  let component: AddOrganismoComponent;
  let fixture: ComponentFixture<AddOrganismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrganismoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrganismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
