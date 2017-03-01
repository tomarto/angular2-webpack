import { Service } from './Service';
import { RowService } from './RowService';

export const ROW_SERVICES: RowService[] = [
    {
        services: [
            {
                name: 'Sombreros',
                imageUrl: 'assets/images/services/sombreros.png',
                description: 'Has que tu evento sea colorido con nuestros diferentes ' +
                'tipos de sombreros y diviértanse como nunca.'
            },
            {
                name: 'Robot LED',
                imageUrl: 'assets/images/services/robot-led.png',
                description: 'Ilumina el escenario y la pista de baile con nuestro robot LED.'
            }
        ]
    },
    {
        services: [
            {
                name: 'Accesorios',
                imageUrl: 'assets/images/services/accesorios.png',
                description: 'Diviértete con los accesorios referentes al tipo de música.'
            },
            {
                name: 'Letras de boda',
                imageUrl: 'assets/images/services/letras-boda.png',
                description: 'Decora el recibidor o el salón con las letras de boda gigante.'
            }
        ]
    },
    {
        services: [
            {
                name: 'Arlequin de Carnaval',
                imageUrl: 'assets/images/services/arlequin-carnaval.png',
                description: 'Deja salir el espíritu de fiesta con nuestros arlequines de carnaval.'
            }
        ]
    }
];
