import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  // allows us to apply middlewares
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware)
      .forRoutes(
        {
          path: '/customers/search/:id',
          method: RequestMethod.GET,
        },
        {
          path: '/customers/:id',
          method: RequestMethod.GET,
        },
      );

    // You can also use exclude for one endpoint in the whole controller file
    // consumer
    //   .apply(ValidateCustomerMiddleware)
    //   .exclude({
    //     path: 'api/customers/create',
    //     method: RequestMethod.POST,
    //   })
    //   .forRoutes(CustomersController);
  }
}
