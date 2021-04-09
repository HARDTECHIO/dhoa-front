import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateAgo',
    pure: true
})
export class DateAgoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Agora';
            const intervals = {
                'ano': 31536000,
                'mes': 2592000,
                'semana': 604800,
                'dia': 86400,
                'hora': 3600,
                'minuto': 60,
                'segundo': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' atrás'; // singular (1 day ago)
                    } else {
                        return counter + ' ' + i + 's atrás'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }

}