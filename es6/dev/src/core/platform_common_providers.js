import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { Console } from 'angular2/src/core/console';
import { Reflector, reflector } from './reflection/reflection';
import { ReflectorReader } from './reflection/reflector_reader';
import { TestabilityRegistry } from 'angular2/src/core/testability/testability';
import { PLATFORM_CORE_PROVIDERS } from './application_ref';
function _reflector() {
    return reflector;
}
/**
 * A default set of providers which should be included in any Angular platform.
 */
export const PLATFORM_COMMON_PROVIDERS = CONST_EXPR([
    PLATFORM_CORE_PROVIDERS,
    new Provider(Reflector, { useFactory: _reflector, deps: [] }),
    new Provider(ReflectorReader, { useExisting: Reflector }),
    TestabilityRegistry,
    Console
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtR3ZJZ1dkYUMudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL3BsYXRmb3JtX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBOEMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQ3pGLEVBQVUsUUFBUSxFQUF3QixNQUFNLHNCQUFzQjtPQUN0RSxFQUFDLE9BQU8sRUFBQyxNQUFNLDJCQUEyQjtPQUMxQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSx5QkFBeUI7T0FDckQsRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0I7T0FDdEQsRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDJDQUEyQztPQUN0RSxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUJBQW1CO0FBRXpEO0lBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxPQUFPLE1BQU0seUJBQXlCLEdBQW1DLFVBQVUsQ0FBQztJQUNsRix1QkFBdUI7SUFDdkIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDM0QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxDQUFDO0lBQ3ZELG1CQUFtQjtJQUNuQixPQUFPO0NBQ1IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBpc0JsYW5rLCBpc1ByZXNlbnQsIGFzc2VydGlvbnNFbmFibGVkLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtwcm92aWRlLCBQcm92aWRlciwgSW5qZWN0b3IsIE9wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge0NvbnNvbGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NvbnNvbGUnO1xuaW1wb3J0IHtSZWZsZWN0b3IsIHJlZmxlY3Rvcn0gZnJvbSAnLi9yZWZsZWN0aW9uL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtSZWZsZWN0b3JSZWFkZXJ9IGZyb20gJy4vcmVmbGVjdGlvbi9yZWZsZWN0b3JfcmVhZGVyJztcbmltcG9ydCB7VGVzdGFiaWxpdHlSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvdGVzdGFiaWxpdHkvdGVzdGFiaWxpdHknO1xuaW1wb3J0IHtQTEFURk9STV9DT1JFX1BST1ZJREVSU30gZnJvbSAnLi9hcHBsaWNhdGlvbl9yZWYnO1xuXG5mdW5jdGlvbiBfcmVmbGVjdG9yKCk6IFJlZmxlY3RvciB7XG4gIHJldHVybiByZWZsZWN0b3I7XG59XG5cbi8qKlxuICogQSBkZWZhdWx0IHNldCBvZiBwcm92aWRlcnMgd2hpY2ggc2hvdWxkIGJlIGluY2x1ZGVkIGluIGFueSBBbmd1bGFyIHBsYXRmb3JtLlxuICovXG5leHBvcnQgY29uc3QgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUzogQXJyYXk8VHlwZSB8IFByb3ZpZGVyIHwgYW55W10+ID0gQ09OU1RfRVhQUihbXG4gIFBMQVRGT1JNX0NPUkVfUFJPVklERVJTLFxuICBuZXcgUHJvdmlkZXIoUmVmbGVjdG9yLCB7dXNlRmFjdG9yeTogX3JlZmxlY3RvciwgZGVwczogW119KSxcbiAgbmV3IFByb3ZpZGVyKFJlZmxlY3RvclJlYWRlciwge3VzZUV4aXN0aW5nOiBSZWZsZWN0b3J9KSxcbiAgVGVzdGFiaWxpdHlSZWdpc3RyeSxcbiAgQ29uc29sZVxuXSk7Il19