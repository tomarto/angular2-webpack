export const LOGIN_VALIDATION = {
    username: {
        minlength: 5,
        maxlength: 50,
        pattern: '^[A-z0-9_.-]*$',
        messages: {
            required: 'El Usuario es requerido',
            minlength: 'El Usuario debe tener un mínimo de 5 caracteres',
            maxlength: 'El Usuario debe tener un máximo de 50 caracteres',
            pattern: 'El Usuario sólo acepta caracteres alfanuméricos'
        }
    },
    password: {
        minlength: 6,
        maxlength: 50,
        pattern: '^[A-z0-9_.-]*$',
        messages: {
            required: 'La Contraseña es requerido',
            minlength: 'La Contraseña debe tener un mínimo de 6 caracteres',
            maxlength: 'La Contraseña debe tener un máximo de 50 caracteres',
            pattern: 'La Contraseña sólo acepta caracteres alfanuméricos'
        }
    }
};
