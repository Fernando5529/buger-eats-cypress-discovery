var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            anddress: {
                postalcode: '06340390',
                street: 'Rua Francisco Abruzzesse',
                number: '145',
                details: 'Ap 142',
                district: 'Parque Santa Teresa',
                city_state: 'Carapicuíba/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }

}

