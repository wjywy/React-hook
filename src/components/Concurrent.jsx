// react在内部定义了五种类型的更新优先级：
// ImmediatePriority,直接优先级，对应于用户的click，focus，input事件
// UserBlockingPriority,用户阻塞优先级,对应于用户的mousemove，scroll事件
// NormalPriority,普通优先级，对应网络请求，useTransition事件
// LowPriority,低优先级，未找到对应场景
// IdlePriority,空闲优先级，如OffScreen
