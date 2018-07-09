const GetStartEnties = [
    {
        image: require('../assets/images/get_started_first.png'),
        logoText: 'FAST',
        title: 'Get Started',
        description: 'No more waiting outside the restaurant for available table.',
        color: '#78B9EB'
    },
    {
        image: require('../assets/images/get_started_scan.png'),
        logoText: '',
        title: 'Scan It!',
        description: 'Scan to take Queue Number and Order your food thru FastApp!',
        color: '#2485D0'
    },
    {
        image: require('../assets/images/get_started_nearby.png'),
        logoText: '',
        title: 'Near Me',
        description: 'Search for nearby delicious foods and check for their queue time and rating!',
        color: '#0168B8'
    },
    {
        image: require('../assets/images/get_started_bill.png'),
        logoText: '',
        title: 'View Bill',
        description: 'View your bill before you proceed to make payment thru the app.',
        color: '#13508A'
    }
]

const Promotions = [
    {
        image: require('../assets/images/home_ongoing_first.png'),
        title: 'Subway Buy 1 Get 1 Free Promotion',
        descriptions: ['Valid from 1st June to 30th August 2018*.', 'Available all on outlets!']
    },
    {
        image: require('../assets/images/home_ongoing_second.png'),
        title: 'Crystal Jade $8.80 Lunch Set',
        descriptions: ['Valid from 1st June to 30th August 2018*.', 'Available all on outlets!']
    }
]

const Suggestions = [
    {
        image: require('../assets/images/home_suggestion_first.png'),
        title: 'Sushi Palace',
        category: 'Japanese Cuisine',
        location: '200m, Tampines Mall'
    },
    {
        image: require('../assets/images/home_suggestion_second.png'),
        title: 'Crystal Jade Kitchen',
        category: 'Chinese Cuisine',
        location: '200m, Tampines Mall'
    }
]

const Followings = [
    {
        image: require('../assets/images/home_suggestion_second.png'),
        title: 'Crystal Jade Kitchen',
        location: 'Tampines Mall, #03-10',
        category: 'Chinese Cuisine',
        like: true
    },
    {
        image: require('../assets/images/home_suggestion_first.png'),
        title: 'Sushi Palace',
        location: 'Tampines Mall, #03-15',
        category: 'Japanese Cuisine',
        like: true
    }
]

const OrderHistories = [
    {
        image: require('../assets/images/home_suggestion_first.png'),
        title: 'Crystal Jade Kitchen',
        location: 'Tampines Mall, #03-10',
        date: '5:30PM, Today',
        cost: 15.15,
        payment: 'CASH'
    },
    {
        image: require('../assets/images/home_suggestion_second.png'),
        title: 'SushiPlace',
        location: 'Tampines Mall, #03-15',
        date: '7:30PM, Yesterday',
        cost: 22.35,
        payment: 'PayLah!'
    }
]

const Constants = {
    GetStartEnties,
    Promotions,
    Suggestions,
    Followings,
    OrderHistories
}

export default Constants