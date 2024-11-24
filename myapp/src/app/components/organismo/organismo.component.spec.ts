import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoComponent } from './organismo.component';

describe('OrganismoComponent', () => {
  let component: OrganismoComponent;
  let fixture: ComponentFixture<OrganismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
