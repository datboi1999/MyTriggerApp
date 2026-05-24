import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from '../controllers/health.controller';
import { CampaignModule } from './campaign.module';
import { AuthModule } from './auth.module';
import { AnalyticsModule } from './analytics.module';
import { BillingModule } from './billing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    CampaignModule,
    AuthModule,
    AnalyticsModule,
    BillingModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
