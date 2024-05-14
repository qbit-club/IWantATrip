import { defineStore } from 'pinia'
import ExcursionService from '../service/ExcursionService.js'

import { useAuth } from './auth.js'
import { useLocations } from './locations.js'

export const useExcursion = defineStore('excursion', {
    state: () => ({
    }),
    getters: {
    },
    actions: {
        async create(excursion) {
            return await ExcursionService.create({ excursion, userId: useAuth().user._id })
        },
        async getUserExcursions() {
            const user = useAuth().user
            return await ExcursionService.getUserExcursions(user._id)
        },

        /** 
         * dates are from datePlugin.excursions.concatDateAndTime
         * _id is excursion _id
        */
        async createDates(dates, _id) {
            const userStore = useAuth()
            return await ExcursionService.createDates(dates, _id, userStore.user._id)
        },
        async getAll() {
            return await ExcursionService.getAll(useLocations().location._id)
        },
        async getExcursionById(_id) {
            return await ExcursionService.getExcursionById(_id)
        },
        /**
         * _id is excursion _id
         */
        async getExcursionBillsById(_id) {
            return await ExcursionService.getExcursionBillsById(_id)
        },
        async deleteExcursionBill(_id) {
            return await ExcursionService.deleteExcursionBill(_id)
        },
        async getExcursionBookingsById(_id) {
            return await ExcursionService.getExcursionBookingsById(_id)
        },
        async getTimeCustomers(excursionId, timeId) {
            return await ExcursionService.getTimeCustomers(excursionId, timeId)
        },
        async getTimeBookings(excursionId, timeId) {
            return await ExcursionService.getTimeBookings(excursionId, timeId)
        },
        async deleteTime(dateId, timeId) {
            return await ExcursionService.deleteTime(dateId, timeId)
        },
        async deleteDate(dateId) {
            const userStore = useAuth()
            return await ExcursionService.deleteDate(dateId, userStore.user._id)
        },




        async uploadImages(data) {
            return await ExcursionService.uploadImages(data)
        },
        async deleteById(_id) {
            return await ExcursionService.deleteById(_id)
        },
        async hideExcursion(_id, isHide) {
            return await ExcursionService.hideExcursion(_id, isHide)
        },
        async buy(timeId, toSend) {
            let userStore = useAuth()
            return await ExcursionService.buy(timeId, userStore.user._id, toSend)
        },
        async book(count, timeId, excursionId) {
            let userStore = useAuth()
            return await ExcursionService.book({ time: timeId, excursion: excursionId, user: userStore.user._id, count })
        },
        async getExcursionsOnModeration() {
            return await ExcursionService.getExcursionsOnModeration()
        },
        async deleteExcursion(_id) {
            return await ExcursionService.deleteExcursion(_id)
        },
        async approvExcursion(_id) {
            return await ExcursionService.approvExcursion(_id)
        },
        async buyFromCabinet(timeId, toSend, fullinfo) {
            return await ExcursionService.buyFromCabinet(timeId, toSend, fullinfo)
        }

    }
})