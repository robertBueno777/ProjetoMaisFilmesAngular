import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListasFilmes } from './listas-filmes';

describe('ListasFilmes', () => {
  let component: ListasFilmes;
  let fixture: ComponentFixture<ListasFilmes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasFilmes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListasFilmes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
