import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneroFilme } from './genero-filme';

describe('GeneroFilme', () => {
  let component: GeneroFilme;
  let fixture: ComponentFixture<GeneroFilme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroFilme],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneroFilme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
