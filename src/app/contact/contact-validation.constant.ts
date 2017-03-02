export const CONTACT_VALIDATION = {
    name: {
        minlength: 3,
        maxlength: 60,
        pattern: '^[A-z0-9_. -]*$',
        messages: {
            required: 'El Nombre es requerido',
            minlength: 'El Nombre debe tener un mínimo de 3 caracteres',
            maxlength: 'El Nombre debe tener un máximo de 60 caracteres',
            pattern: 'El Nombre sólo acepta caracteres alfanuméricos'
        }
    },
    email: {
        minlength: 9,
        maxlength: 120,
        pattern: '^[A-z_]+[A-z0-9._-]*[A-z0-9_]+@[A-z]+\.[A-z.]{2,5}$',
        messages: {
            required: 'El Email es requerido',
            minlength: 'El Email debe tener un mínimo de 9 caracteres',
            maxlength: 'El Email debe tener un máximo de 120 caracteres',
            pattern: 'El Email debe ser válido'
        }
    },
    phone: {
        minlength: 7,
        maxlength: 18,
        pattern: '^[0-9. -]*$',
        messages: {
            required: 'El Teléfono es requerido',
            minlength: 'El Teléfono debe tener un mínimo de 7 caracteres',
            maxlength: 'El Teléfono debe tener un máximo de 18 caracteres',
            pattern: 'El Teléfono debe ser válido'
        }
    },
    subject: {
        minlength: 3,
        maxlength: 100,
        pattern: '^[A-z0-9_. -]*$',
        messages: {
            required: 'El Asunto es requerido',
            minlength: 'El Asunto debe tener un mínimo de 3 caracteres',
            maxlength: 'El Asunto debe tener un máximo de 100 caracteres',
            pattern: 'El Asunto sólo acepta caracteres alfanuméricos'
        }
    },
    message: {
        minlength: 3,
        maxlength: 5000,
        messages: {
            required: 'El Mensaje es requerido',
            minlength: 'El Mensaje debe tener un mínimo de 3 caracteres',
            maxlength: 'El Mensaje debe tener un máximo de 5000 caracteres'
        }
    }
};
