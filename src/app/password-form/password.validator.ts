import { PasswordFormComponent } from './password-form.component';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator{
    

    static oldPasswordValidation(control: AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if((control.value as string)!=='1234'){
                    resolve({oldPasswordIncorrect:true})
                }
                else{
                    resolve(null)
                }
            },5000)
            
        })
    }
    static passwordMatch(control: AbstractControl){
        let newPassword=control.get('newPassword');
        let confirmPassword=control.get('confirmPassword');
        if(newPassword.value!==confirmPassword.value)
            return {passwordShouldMatch: true};
        
        
        return {passwordShouldMatch: false};
        
    }
    // static matchError(control: AbstractControl): ValidationErrors| null{
    //     if ((control.value as string)==='koushik'){
    //         return 
    //     }
    // }
}