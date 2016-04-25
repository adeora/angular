import { XHR } from 'angular2/src/compiler/xhr';
import { WebWorkerXHRImpl } from 'angular2/src/web_workers/worker/xhr_impl';
import { WebWorkerRootRenderer } from 'angular2/src/web_workers/worker/renderer';
import { print, CONST_EXPR } from 'angular2/src/facade/lang';
import { RootRenderer } from 'angular2/src/core/render/api';
import { PLATFORM_DIRECTIVES, PLATFORM_PIPES, ExceptionHandler, APPLICATION_COMMON_PROVIDERS, PLATFORM_COMMON_PROVIDERS, OpaqueToken } from 'angular2/core';
import { COMMON_DIRECTIVES, COMMON_PIPES, FORM_PROVIDERS } from "angular2/common";
import { ClientMessageBrokerFactory, ClientMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/client_message_broker';
import { ServiceMessageBrokerFactory, ServiceMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/service_message_broker';
import { Serializer } from "angular2/src/web_workers/shared/serializer";
import { ON_WEB_WORKER } from "angular2/src/web_workers/shared/api";
import { Provider } from 'angular2/src/core/di';
import { RenderStore } from 'angular2/src/web_workers/shared/render_store';
class PrintLogger {
    constructor() {
        this.log = print;
        this.logError = print;
        this.logGroup = print;
    }
    logGroupEnd() { }
}
export const WORKER_APP_PLATFORM_MARKER = CONST_EXPR(new OpaqueToken('WorkerAppPlatformMarker'));
export const WORKER_APP_PLATFORM = CONST_EXPR([
    PLATFORM_COMMON_PROVIDERS,
    CONST_EXPR(new Provider(WORKER_APP_PLATFORM_MARKER, { useValue: true }))
]);
export const WORKER_APP_APPLICATION_COMMON = CONST_EXPR([
    APPLICATION_COMMON_PROVIDERS,
    FORM_PROVIDERS,
    Serializer,
    new Provider(PLATFORM_PIPES, { useValue: COMMON_PIPES, multi: true }),
    new Provider(PLATFORM_DIRECTIVES, { useValue: COMMON_DIRECTIVES, multi: true }),
    new Provider(ClientMessageBrokerFactory, { useClass: ClientMessageBrokerFactory_ }),
    new Provider(ServiceMessageBrokerFactory, { useClass: ServiceMessageBrokerFactory_ }),
    WebWorkerRootRenderer,
    new Provider(RootRenderer, { useExisting: WebWorkerRootRenderer }),
    new Provider(ON_WEB_WORKER, { useValue: true }),
    RenderStore,
    new Provider(ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }),
    WebWorkerXHRImpl,
    new Provider(XHR, { useExisting: WebWorkerXHRImpl })
]);
function _exceptionHandler() {
    return new ExceptionHandler(new PrintLogger());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX2FwcF9jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUd2SWdXZGFDLnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX2FwcF9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSwyQkFBMkI7T0FDdEMsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBDQUEwQztPQUNsRSxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMENBQTBDO09BQ3ZFLEVBQUMsS0FBSyxFQUFRLFVBQVUsRUFBWSxNQUFNLDBCQUEwQjtPQUNwRSxFQUFDLFlBQVksRUFBQyxNQUFNLDhCQUE4QjtPQUNsRCxFQUNMLG1CQUFtQixFQUNuQixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLDRCQUE0QixFQUM1Qix5QkFBeUIsRUFDekIsV0FBVyxFQUNaLE1BQU0sZUFBZTtPQUNmLEVBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBQyxNQUFNLGlCQUFpQjtPQUN4RSxFQUNMLDBCQUEwQixFQUMxQiwyQkFBMkIsRUFDNUIsTUFBTSx1REFBdUQ7T0FDdkQsRUFDTCwyQkFBMkIsRUFDM0IsNEJBQTRCLEVBQzdCLE1BQU0sd0RBQXdEO09BQ3hELEVBQUMsVUFBVSxFQUFDLE1BQU0sNENBQTRDO09BQzlELEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDO09BQzFELEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCO09BQ3RDLEVBQUMsV0FBVyxFQUFDLE1BQU0sOENBQThDO0FBRXhFO0lBQUE7UUFDRSxRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRW5CLENBQUM7SUFEQyxXQUFXLEtBQUksQ0FBQztBQUNsQixDQUFDO0FBRUQsT0FBTyxNQUFNLDBCQUEwQixHQUFHLFVBQVUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7QUFFakcsT0FBTyxNQUFNLG1CQUFtQixHQUEyQyxVQUFVLENBQUM7SUFDcEYseUJBQXlCO0lBQ3pCLFVBQVUsQ0FBQyxJQUFJLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0NBQ3ZFLENBQUMsQ0FBQztBQUVILE9BQU8sTUFBTSw2QkFBNkIsR0FBMkMsVUFBVSxDQUFDO0lBQzlGLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsVUFBVTtJQUNWLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ25FLElBQUksUUFBUSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUM3RSxJQUFJLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO0lBQ2pGLElBQUksUUFBUSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFDLENBQUM7SUFDbkYscUJBQXFCO0lBQ3JCLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFDLFdBQVcsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0lBQ2hFLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUM3QyxXQUFXO0lBQ1gsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ3pFLGdCQUFnQjtJQUNoQixJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztDQUNuRCxDQUFDLENBQUM7QUFFSDtJQUNFLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci94aHInO1xuaW1wb3J0IHtXZWJXb3JrZXJYSFJJbXBsfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvd29ya2VyL3hocl9pbXBsJztcbmltcG9ydCB7V2ViV29ya2VyUm9vdFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvd29ya2VyL3JlbmRlcmVyJztcbmltcG9ydCB7cHJpbnQsIFR5cGUsIENPTlNUX0VYUFIsIGlzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Um9vdFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpJztcbmltcG9ydCB7XG4gIFBMQVRGT1JNX0RJUkVDVElWRVMsXG4gIFBMQVRGT1JNX1BJUEVTLFxuICBFeGNlcHRpb25IYW5kbGVyLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTLFxuICBPcGFxdWVUb2tlblxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVMsIENPTU1PTl9QSVBFUywgRk9STV9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7XG4gIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5LFxuICBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeV9cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9jbGllbnRfbWVzc2FnZV9icm9rZXInO1xuaW1wb3J0IHtcbiAgU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5LFxuICBTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnlfXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VydmljZV9tZXNzYWdlX2Jyb2tlcic7XG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7T05fV0VCX1dPUktFUn0gZnJvbSBcImFuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvYXBpXCI7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge1JlbmRlclN0b3JlfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3JlbmRlcl9zdG9yZSc7XG5cbmNsYXNzIFByaW50TG9nZ2VyIHtcbiAgbG9nID0gcHJpbnQ7XG4gIGxvZ0Vycm9yID0gcHJpbnQ7XG4gIGxvZ0dyb3VwID0gcHJpbnQ7XG4gIGxvZ0dyb3VwRW5kKCkge31cbn1cblxuZXhwb3J0IGNvbnN0IFdPUktFUl9BUFBfUExBVEZPUk1fTUFSS0VSID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ1dvcmtlckFwcFBsYXRmb3JtTWFya2VyJykpO1xuXG5leHBvcnQgY29uc3QgV09SS0VSX0FQUF9QTEFURk9STTogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPSBDT05TVF9FWFBSKFtcbiAgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUyxcbiAgQ09OU1RfRVhQUihuZXcgUHJvdmlkZXIoV09SS0VSX0FQUF9QTEFURk9STV9NQVJLRVIsIHt1c2VWYWx1ZTogdHJ1ZX0pKVxuXSk7XG5cbmV4cG9ydCBjb25zdCBXT1JLRVJfQVBQX0FQUExJQ0FUSU9OX0NPTU1PTjogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPSBDT05TVF9FWFBSKFtcbiAgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUyxcbiAgRk9STV9QUk9WSURFUlMsXG4gIFNlcmlhbGl6ZXIsXG4gIG5ldyBQcm92aWRlcihQTEFURk9STV9QSVBFUywge3VzZVZhbHVlOiBDT01NT05fUElQRVMsIG11bHRpOiB0cnVlfSksXG4gIG5ldyBQcm92aWRlcihQTEFURk9STV9ESVJFQ1RJVkVTLCB7dXNlVmFsdWU6IENPTU1PTl9ESVJFQ1RJVkVTLCBtdWx0aTogdHJ1ZX0pLFxuICBuZXcgUHJvdmlkZXIoQ2xpZW50TWVzc2FnZUJyb2tlckZhY3RvcnksIHt1c2VDbGFzczogQ2xpZW50TWVzc2FnZUJyb2tlckZhY3RvcnlffSksXG4gIG5ldyBQcm92aWRlcihTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnksIHt1c2VDbGFzczogU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5X30pLFxuICBXZWJXb3JrZXJSb290UmVuZGVyZXIsXG4gIG5ldyBQcm92aWRlcihSb290UmVuZGVyZXIsIHt1c2VFeGlzdGluZzogV2ViV29ya2VyUm9vdFJlbmRlcmVyfSksXG4gIG5ldyBQcm92aWRlcihPTl9XRUJfV09SS0VSLCB7dXNlVmFsdWU6IHRydWV9KSxcbiAgUmVuZGVyU3RvcmUsXG4gIG5ldyBQcm92aWRlcihFeGNlcHRpb25IYW5kbGVyLCB7dXNlRmFjdG9yeTogX2V4Y2VwdGlvbkhhbmRsZXIsIGRlcHM6IFtdfSksXG4gIFdlYldvcmtlclhIUkltcGwsXG4gIG5ldyBQcm92aWRlcihYSFIsIHt1c2VFeGlzdGluZzogV2ViV29ya2VyWEhSSW1wbH0pXG5dKTtcblxuZnVuY3Rpb24gX2V4Y2VwdGlvbkhhbmRsZXIoKTogRXhjZXB0aW9uSGFuZGxlciB7XG4gIHJldHVybiBuZXcgRXhjZXB0aW9uSGFuZGxlcihuZXcgUHJpbnRMb2dnZXIoKSk7XG59XG4iXX0=