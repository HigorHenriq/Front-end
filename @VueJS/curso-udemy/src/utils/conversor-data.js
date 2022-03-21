import moment from 'moment'

function mascDataFormatoBr(data) {
    if (data) {
        return moment(data).locale('pt-br').format('DD-MM-YYYY')
    }
    else {
        return undefined
    }
}

function mascISOemFormatoAmeric(data) {

    // let formatData = data.replaceAll("/", "-")

    if (data) {
        let dataAmericana = moment(data).locale('pt-br').format('YYYY-MM-DD')

        return dataAmericana + "T17:16:57.516Z"
    }
    else {
        return undefined
    }
}

function mascISOtoAmericano(data) {
    if (data) {
        return moment(data).locale('pt-br').format('YYYY-MM-DD')
    }
    else {
        return undefined
    }
}

export default {
    mascDataFormatoBr,
    mascISOemFormatoAmeric,
    mascISOtoAmericano
}
