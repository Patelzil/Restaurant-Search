import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer drrk64HltRsFxQdaD9hKKEC-VvaPCXFRU0_MCDJiR-OJdqWAs0JEzVMN6nw75PSFx9EIRbi3iwJmLHJXnp9FfMFwLyFRxs302PX2oLRI5z25DV71cmjyQT1N4k0aXnYx'
    }
});

