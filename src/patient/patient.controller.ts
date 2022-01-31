/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Controller('api')
export class PatientController { 
    constructor(private patientService: PatientService){ }
    @Post('patient/register')
    async create(@Body() task: Patient) : Promise<any>{
        return this.patientService.create(task);
    }
}
