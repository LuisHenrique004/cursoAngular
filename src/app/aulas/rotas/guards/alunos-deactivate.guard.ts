import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { IFormCanDeactivate } from './iform-candeactivate.model';

export const alunosDeactivateGuard: CanDeactivateFn<IFormCanDeactivate> = 
(componen: IFormCanDeactivate, 
  currentRoute: ActivatedRouteSnapshot, 
  currentState: RouterStateSnapshot, 
  nextState) => {

  console.log('tudo ok por aqui!')  
  return true;
};
